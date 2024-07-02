package com.localhost.barcodeserver.barcodeapi.api.controllers;

import java.net.InetAddress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping("/")
@AllArgsConstructor
public class viewsController {

    @Autowired
    Environment environment;

    @GetMapping("/")
    public String showViewTest(Model model) {
        String ipAddress = "No se pudo obtener la dirección IP";

        try {
            InetAddress inetAddress = InetAddress.getLoopbackAddress();
            ipAddress = inetAddress.getHostAddress();
        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("localAddress", ipAddress);

        return "intro";
    }
    
    @GetMapping("/scanner")
    public String showViewScanner() {
        return "index";
    }

    @GetMapping("/receiver")
    public String showViewReceive() {
        return "receiver";
    }

    @GetMapping("/showProducts")
    public String showViewProducts() {
        return "showProducts";
    }
    

}
