package com.andreik.messenger.notification;

import com.andreik.messenger.message.MessageType;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Notification {

    private String chatId;
    private String chatName;
    private String content;
    private String senderId;
    private String receiverId;
    private MessageType messageType;
    private NotificationType type;
    private byte[] media;

}
