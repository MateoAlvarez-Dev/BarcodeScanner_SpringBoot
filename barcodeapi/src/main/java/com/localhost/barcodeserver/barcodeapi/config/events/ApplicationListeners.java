package com.localhost.barcodeserver.barcodeapi.config.events;

import javax.swing.JOptionPane;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import lombok.NoArgsConstructor;

@Component
@NoArgsConstructor
public class ApplicationListeners{

    @Autowired
    private Environment environment;

    public void onApplicationStart(){
        JOptionPane.showMessageDialog(null, environment.getProperty("server.address"));
    }

}