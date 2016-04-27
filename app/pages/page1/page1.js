import { Page, NavController, NavParams } from 'ionic-angular';
import { SimpleDoctorPage } from '../simple-doctor/simple-doctor';

@Page({
	templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	static get parameters() {
		return [[NavController], [NavParams]];
	}

	constructor(nav, navParams) {
		this.initializeItems();
		this.nav = nav;
	}

	initializeItems() {
		this.doctors = [{
			name: 'Dmitry Vlasenko',
			position: 'Frontend developer',
			id: 1
        }, {
			name: 'Dmitry Vlasenko',
			position: 'Frontend developer',
			id: 2
        }, {
			name: 'Dmitry Vlasenko',
			position: 'Frontend developer',
			id: 3
        }, {
			name: 'Dmitry Vlasenko',
			position: 'Frontend developer',
			id: 4
        }, {
			name: 'Dmitry Vlasenko',
			position: 'Frontend developer',
			id: 5
        }, {
			name: 'Dmitry Vlasenko',
			position: 'Frontend developer',
			id: 6
        }];
	}

	click(item) {
		this.searchQuery = item;
	}

	showDoctor(doctor) {
		console.log(doctor);
		this.nav.push(SimpleDoctorPage, {
			doctor: doctor
		});
	}

	getItems(searchBar) {
		this.initializeItems();
		var q = searchBar.value;

		this.items = this.items.filter((v) => {
			if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
				return true;
			}
			return false;
		})
	}
}
