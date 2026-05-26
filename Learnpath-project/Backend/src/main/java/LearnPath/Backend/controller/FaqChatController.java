package LearnPath.Backend.controller;

import LearnPath.Backend.service.FaqChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/faq-bot")
public class FaqChatController {

    @Autowired
    private FaqChatService faqChatService;

    @GetMapping("/chat")
    public ResponseEntity<String> chatGet(@RequestParam("message") String message) {
        String response = faqChatService.processQuery(message);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/chat")
    public ResponseEntity<String> chatPost(@RequestBody Map<String, String> payload) {
        String message = payload.get("message");
        if (message == null) {
            return ResponseEntity.badRequest().body("Message is required in payload");
        }
        String response = faqChatService.processQuery(message);
        return ResponseEntity.ok(response);
    }
}
