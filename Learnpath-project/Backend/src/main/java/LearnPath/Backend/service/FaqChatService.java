package LearnPath.Backend.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class FaqChatService {

    private final Map<String, String> predefinedFaqs;

    private static final String STRICT_FALLBACK = "I'm sorry, I can only assist with general FAQs. Please contact our customer support team at +1-800-XXX-XXXX or support@learnpath.com for further assistance.";

    public FaqChatService() {
        this.predefinedFaqs = new HashMap<>();

        // Initialize predefined FAQs
        predefinedFaqs.put("what is learnpath", "LearnPath is a personalized learning platform designed to help engineering graduates enhance their skills.");
        predefinedFaqs.put("how do i reset my password", "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email.");
        predefinedFaqs.put("how to contact support", "You can contact support via email at support@learnpath.com or call us at +1-800-XXX-XXXX.");
        predefinedFaqs.put("is learnpath free", "LearnPath offers both free and premium courses. You can browse our catalog to find courses that fit your budget.");
        predefinedFaqs.put("how do i get personalized recommendations", "Once you log in, navigate to the Dashboard and complete the Psychometric Test to receive tailored course recommendations.");
    }

    public String processQuery(String query) {
        if (query == null || query.trim().isEmpty()) {
            return "Please enter a valid question.";
        }

        String normalizedQuery = query.toLowerCase().trim().replaceAll("[^a-z0-9 ]", "");

        // 1. Check exact or partial match in FAQs
        for (Map.Entry<String, String> entry : predefinedFaqs.entrySet()) {
            String faqKey = entry.getKey().replaceAll("[^a-z0-9 ]", "");
            if (normalizedQuery.contains(faqKey) || faqKey.contains(normalizedQuery)) {
                if (normalizedQuery.length() > 5 || faqKey.equals(normalizedQuery)) {
                    return entry.getValue();
                }
            }
        }

        return STRICT_FALLBACK;
    }
}
