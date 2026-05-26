package LearnPath.Backend.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class FaqChatService {

    private final ChatClient chatClient;
    private final Map<String, String> predefinedFaqs;

    private static final String STRICT_FALLBACK = "I'm sorry, I can only assist with general FAQs. Please contact our customer support team at +1-800-XXX-XXXX or support@learnpath.com for further assistance.";

    public FaqChatService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
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

        // 2. Fallback to Gemini for technical doubts classification
        String systemPrompt = "You are a classifier for an educational platform's FAQ bot. " +
                "The user will ask a question. " +
                "Determine if the question is a purely technical computer science, software engineering, or coding doubt (e.g., 'What is Java?', 'How do I write a for loop?', 'Explain polymorphism'). " +
                "If it IS a technical doubt, answer the question helpfully and concisely. " +
                "If it is NOT a technical doubt (e.g., questions about the platform, billing, account issues, random chatter, etc.), you MUST reply with exactly the word: 'FALLBACK' and nothing else.";

        try {
            String aiResponse = this.chatClient.prompt()
                    .system(systemPrompt)
                    .user(query)
                    .call()
                    .content();

            if (aiResponse != null) {
                if (aiResponse.trim().equalsIgnoreCase("FALLBACK")) {
                    return STRICT_FALLBACK;
                }
                return aiResponse;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        // 3. Ultimate Fallback
        return STRICT_FALLBACK;
    }
}
