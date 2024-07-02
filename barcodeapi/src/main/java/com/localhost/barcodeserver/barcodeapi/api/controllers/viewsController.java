package com.localhost.barcodeserver.barcodeapi.api.controllers;

import java.net.InetSocketAddress;
import java.net.Socket;

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

        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress("google.com", 80));
            ipAddress = socket.getLocalAddress().getHostAddress();
            socket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("localAddress", ipAddress);

        return "intro";
    }
    
    @GetMapping("/scanner")
    public String showViewScanner(Model model) {

        String ipAddress = "ERROR: No se pudo obtener la dirección IP";

        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress("google.com", 80));
            ipAddress = socket.getLocalAddress().getHostAddress();
            socket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("localAddress", ipAddress);

        return "index";

    }

    @GetMapping("/receiver")
    public String showViewReceive(Model model) {

        String ipAddress = "ERROR: No se pudo obtener la dirección IP";

        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress("google.com", 80));
            ipAddress = socket.getLocalAddress().getHostAddress();
            socket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("localAddress", ipAddress);
        
        return "receiver";
        
    }

    @GetMapping("/showProducts")
    public String showViewProducts(Model model) {
        return "showProducts";
    }
    

}
