package kr.co.sas.store.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.co.sas.store.model.dto.LoginStoreDTO;
import kr.co.sas.store.model.dto.StoreDTO;
import kr.co.sas.store.model.service.StoreService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/store")
@Tag(name = "STORE", description = "STORE API")
public class StoreController {
	@Autowired
	private StoreService storeService;
	
	
	@Operation(summary = "매장 점주 이메일 중복 체크", description = "이메일을 가져와서 중복 체크")
	@GetMapping(value = "/soEmail/{soEmail}/checkEmail")
	public ResponseEntity<Boolean> checkEmail(@PathVariable String soEmail) {
		boolean result = storeService.checkEmail(soEmail);
		return ResponseEntity.ok(result);
	}//checkEmail
	
	
	@Operation(summary = "점주 제휴 신청", description = "사업자등록번호, 이름, 전화번호, 이메일로 제휴 신청")
	@PostMapping
	public ResponseEntity<Boolean> insertStoreOwner(@RequestBody StoreDTO store) {
		int result = storeService.insertStoreOwner(store);
		return ResponseEntity.ok(result > 0);
	}//insertStoreOwner
	
	
	@Operation(summary = "매장 등록", description = "매장 상호명, 매장 전화번호, 매장 위치, 영업 시간, 매장 유형을 받아서 등록")
	@GetMapping
	public ResponseEntity<Boolean> insertStore(@RequestBody StoreDTO store) {
		int result = storeService.insertStore(store);
		return ResponseEntity.ok(result > 0);
	}//insertStore
	
	
	@Operation(summary = "매장 로그인", description = "이메일, 비밀번호를 객체로 가져와서 로그인")
	@PostMapping(value = "/storeLogin")
	public ResponseEntity<Map> storeLogin(@RequestBody StoreDTO store) {
		Map map = storeService.storeLogin(store);
		return ResponseEntity.ok(map);
	}//storeLogin
	
	
	@Operation(summary = "매장 로그인 갱신", description = "토큰으로 로그인 갱신")
	@PostMapping(value = "/storeRefresh")
	public ResponseEntity<LoginStoreDTO> storeRefresh(@RequestHeader("Authorization") String token) {
		LoginStoreDTO loginStore = storeService.storeRefresh(token);
		if(loginStore != null) {
			return ResponseEntity.ok(loginStore);
		}else {
			return ResponseEntity.status(404).build();
		}//else
	}//storeRefresh
	
	@GetMapping(value="/storeList")
	public ResponseEntity<List> selectAllstore (){
		List storeList = storeService.selectAllstore();
		return ResponseEntity.ok(storeList);
	}
	
	@GetMapping(value="/storeNo/{storeNo}/userNo/{userNo}")
	public ResponseEntity<StoreDTO> getStoreinfo(@PathVariable int storeNo, @PathVariable int userNo) {
//		System.out.println(userNo);
		StoreDTO store = storeService.getStoreinfo(storeNo, userNo);
		System.out.println(store);
		if(store !=null) {
			return ResponseEntity.ok(store);
		}
		return ResponseEntity.status(404).build();
	}
	@GetMapping(value="/storeNo/{storeNo}/menu")
	public ResponseEntity<List> getMenuinfo(@PathVariable int storeNo){
		List list = storeService.getMenuinfo(storeNo);	
		return ResponseEntity.ok(list);
	}
	@GetMapping(value="/storeNo/{storeNo}/review")
	public ResponseEntity<List> getReviewinfo(@PathVariable int storeNo){
		List list = storeService.getReviewinfo(storeNo);
		return ResponseEntity.ok(list);
	}
	
	@Operation(summary = "매장 비밀번호 변경", description ="새 비밀번호와 기존 비밀번호를 객체로 받아서 새 비밀번호로 변경")
	@PostMapping(value = "/changePw")
	public ResponseEntity<Integer> changePw(@RequestBody StoreDTO store) {
		int result = storeService.changePw(store);
		return ResponseEntity.ok(result);
	}//changePw
	
	
	@Operation(summary = "매장 비밀번호 변경 시 회원 조회", description = "점주 이메일, 기존 비밀번호 일치하는지 확인")
	@PostMapping(value = "/checkPw")
	public ResponseEntity<LoginStoreDTO> checkPw(@RequestBody StoreDTO store) {
		LoginStoreDTO result = storeService.checkPw(store);
		if(result != null) {
			return ResponseEntity.ok(result);
		}else {
			return ResponseEntity.status(404).build();
		}//else
	}//checkPw
	
	
	
}
