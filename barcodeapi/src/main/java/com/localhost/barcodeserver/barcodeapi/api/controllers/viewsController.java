package com.localhost.barcodeserver.barcodeapi.api.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping("/")
@AllArgsConstructor
public class viewsController {
    
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
