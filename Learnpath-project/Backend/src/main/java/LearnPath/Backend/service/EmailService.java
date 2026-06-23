package LearnPath.Backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${app.frontend.url:http://localhost:3000}")
    private String frontendUrl;

    public void sendVerificationEmail(String toEmail, String token) {
        String verificationLink = frontendUrl + "/verify-email?token=" + token;
        
        logger.info("=================================================");
        logger.info("VERIFICATION LINK FOR {}: {}", toEmail, verificationLink);
        logger.info("=================================================");
        System.out.println("\n--- VERIFICATION LINK FOR " + toEmail + " ---\n" + verificationLink + "\n----------------------------------------\n");

        if (mailSender == null) {
            logger.warn("JavaMailSender is not configured. Email NOT sent, but link printed to console.");
            return;
        }

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("Please verify your email address");
            message.setText("Welcome to LearnPath!\n\nPlease click the link below to verify your email address:\n\n" 
                    + verificationLink + "\n\nThank you!");
            mailSender.send(message);
            logger.info("Verification email sent to {}", toEmail);
        } catch (Exception e) {
            logger.error("Failed to send verification email to {}: {}. Token/link has been logged above.", toEmail, e.getMessage());
        }
    }
}
