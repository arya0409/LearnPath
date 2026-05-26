package LearnPath.Backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {"spring.ai.vertex.ai.gemini.project-id=test-project-id", "spring.ai.vertex.ai.gemini.location=us-central1"})
class BackendApplicationTests {

	@Test
	void contextLoads() {
	}

}
