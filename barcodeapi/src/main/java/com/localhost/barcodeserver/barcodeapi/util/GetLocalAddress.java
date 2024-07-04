package com.localhost.barcodeserver.barcodeapi.util;

import java.net.InetSocketAddress;
import java.net.Socket;


public class GetLocalAddress {

    private static String localIpAddress;
    
    private static String get(){
        String ipAddress = "localhost";

        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress("google.com", 80));
            ipAddress = socket.getLocalAddress().getHostAddress();
            socket.close();
        } catch (Exception e) {
            System.out.println("\n\n\n[\u001B[31m Error while looking for the LAN Address\u001B[0m ] - Please be sure you're connected to the WiFi, the app is working on LocalHost \n\n\n");
        }

        return ipAddress;
    }

    public static String getAddress(){

        if(localIpAddress == null){
            localIpAddress = GetLocalAddress.get();
            return localIpAddress;
        }

        return localIpAddress;
        
    }

}
