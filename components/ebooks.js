export default class ebook {

	constructor() {
			
		this._ebooks = {
			"ebooks":[]
		}

	}

	set ebooks(ebook){
		return this._ebooks.ebooks.push(ebook);
	}

	get ebooks(){
		return this._ebooks;
	}

	convert(){
		return JSON.stringify(this._ebooks);
	}

}