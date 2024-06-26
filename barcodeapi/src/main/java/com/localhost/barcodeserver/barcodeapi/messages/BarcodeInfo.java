package com.localhost.barcodeserver.barcodeapi.messages;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
public class BarcodeInfo {

    private String decodedString;

}
