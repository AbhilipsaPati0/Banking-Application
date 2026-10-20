package devPilot.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenApiConfig {

	@Bean
	public OpenAPI bankOpenAPI() {
		return new OpenAPI().info(new Info().title("Bank Management System API").version("1.0")
				.description("REST APIs for Bank Management System")
				.contact(new Contact().name("Abhilipsa Pati").email("abhilipsapati2@gmail.com"))
				.license(new License().name("Apache 2.0")));
	}
}