package kr.co.sas.util;

import java.io.UnsupportedEncodingException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

@Component
public class EmailSender {
	
	@Autowired
	private JavaMailSender sender;

	public void sendMail(String emailTitle, String receiver, String emailContent) {
		//api 사용법
		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		
		try {
			//메일 전송 시간
			helper.setSentDate(new Date());
			
			//보내는 사람 정보
			helper.setFrom(new InternetAddress("chosujin517@gmail.com", "Spoon & Smiles"));
			
			//받는 사람 이메일주소 
			helper.setTo(receiver);
			
			//제목 설정
			helper.setSubject(emailTitle);
			
			//내용 설정 (true false여부는 html을 쓸건지 말건지 여부임 (다른 사이트에서 이메일 오는 거 보면 디자인이 약간 되어있는데 그거임))
			helper.setText(emailContent, true);
			
			//이메일 전송
			sender.send(message);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}