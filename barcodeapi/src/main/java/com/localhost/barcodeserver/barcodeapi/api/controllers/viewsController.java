package com.localhost.barcodeserver.barcodeapi.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.localhost.barcodeserver.barcodeapi.util.GetLocalAddress;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping("/")
@AllArgsConstructor
public class viewsController {

    @Autowired
    Environment environment;

    @GetMapping("/")
    public String showViewTest(Model model) {

        model.addAttribute("localAddress", GetLocalAddress.getAddress());

        return "intro";
    }
    
    @GetMapping("/scanner")
    public String showViewScanner(Model model) {

        model.addAttribute("localAddress", GetLocalAddress.getAddress());

        return "index";

    }

    @GetMapping("/receiver")
    public String showViewReceive(Model model) {

        model.addAttribute("localAddress", GetLocalAddress.getAddress());
        
        return "receiver";
        
    }

    @GetMapping("/showProducts")
    public String showViewProducts(Model model) {
        return "showProducts";
    }
    

}
