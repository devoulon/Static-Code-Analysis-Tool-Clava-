
laraImport("clava.analysis_new.analysers.CWE.Checker.CheckerString");

class AnalyserCWE120   {
	
	 isBuffer=false

	 hasCopyFunction=false

	 isSizeCheck=false

	 tabChecker=[this.isBufferInput,this.isSizeCheck,this.isBufferCopy]

	 size =0
	
	 tabInt={}
	
	constructor() {
		}



	result(){
		if(this.tabChecker[2]!==this.tabChecker[1]){
			println( "weakness detected:120"+true)
		}else{
			println( "weakness detected:120"+false)
		}
	}

	
	analyse($node){ 

		if($node===undefined){
			return false
		}
		//  check if variable is a Buffer and get size
		if(this.tabChecker[0] === false){
			this.tabChecker[0]= CheckerString.isBufferInput($node)
			if(this.tabChecker[0]===true){
				this.size=CheckerString.getSizeArray($node)
			}
			return this.tabChecker[0]
		}
		// check  a if condition which check size  
		else if(this.tabChecker[1]===false){
			if(CheckerString.isSensibleFunction($node)){
				this.tabChecker[1]=true
				this.tabChecker[2]=CheckerString.isVerifyingSize($node,this.size)
			}			
		}

	}



}
