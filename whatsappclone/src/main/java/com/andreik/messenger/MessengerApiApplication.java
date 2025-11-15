package com.andreik.messenger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MessengerApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MessengerApiApplication.class, args);
	}

}
