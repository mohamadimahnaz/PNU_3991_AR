// JavaScript Documentconst
var Singleton =(function(){
	var instance = null;
	class Info{
		constructor(){
			this.name="mahnaz";
			this.family="mohammadi";
		}
	}
	return{
	getInstance : function(){
		if(instance== null)
			{
				instance= new Info();
			}
		return instance;
	}
	}
})();


var Ins1=Singleton.getInstance();
document.write(JSON.stringify(Ins1));

var Ins2 = Singleton.getInstance();
document.write(JSON.stringify(Ins1));

document.write(Ins1==Ins2);
