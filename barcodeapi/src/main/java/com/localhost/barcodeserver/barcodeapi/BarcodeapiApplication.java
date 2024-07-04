package com.localhost.barcodeserver.barcodeapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.localhost.barcodeserver.barcodeapi.util.GetLocalAddress;

@SpringBootApplication
public class BarcodeapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BarcodeapiApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {
		System.out.println("\n\n\n[\u001B[32m SERVER STARTED SUCCESFULLY \u001B[0m ] please join to this URL:\u001B[36m https://" + GetLocalAddress.getAddress() + ":8080\n\n\n");
	}

}
