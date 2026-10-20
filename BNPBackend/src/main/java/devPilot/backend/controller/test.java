package devPilot.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {
	@RequestMapping("/")
	public String Name() {
		return "Abhilipsa has made it.";
	}
}
