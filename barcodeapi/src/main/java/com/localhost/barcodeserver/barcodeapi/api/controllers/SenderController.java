package com.localhost.barcodeserver.barcodeapi.api.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.localhost.barcodeserver.barcodeapi.messages.BarcodeInfo;

@Controller
public class SenderController {


  @MessageMapping("/barcodeSender")
  @SendTo("/barcodeReceiver")
  public BarcodeInfo barcodeInfo(BarcodeInfo decoded) throws Exception {
    System.out.println(decoded.getDecodedString());
    return decoded;
  }

}