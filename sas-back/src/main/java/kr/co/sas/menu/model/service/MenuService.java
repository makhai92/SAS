package kr.co.sas.menu.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.sas.menu.model.dao.MenuDao;
import kr.co.sas.menu.model.dto.MenuDTO;
import kr.co.sas.store.model.dao.StoreDao;
import kr.co.sas.store.model.dto.StoreDTO;

@Service
public class MenuService {
	@Autowired
	private MenuDao menuDao;
	@Autowired
	private StoreDao storeDao;
	
	
	@Transactional
	public int insertStoreMenu(MenuDTO menu) {
		int result = menuDao.insertStoreMenu(menu);
		return result;
	}//insertStoreMenu


	public List allMenuList(int loginStoreNo) {
		List list = menuDao.allMenuList(loginStoreNo);
		return list;
	}


	@Transactional
	public int deleteStoreMenu(int menuNo) {
		int result = menuDao.deleteStoreMenu(menuNo);
		return result;
	}//deleteStoreMenu


	@Transactional
	public int updateStoreMenu(MenuDTO storeMenu) {
		int result = menuDao.updateStoreMenu(storeMenu);
		return result;
	}//updateStoreMenu


	public MenuDTO getStoreMenuById(int menuNo) {
		return menuDao.selectMenuById(menuNo);
	}
}
