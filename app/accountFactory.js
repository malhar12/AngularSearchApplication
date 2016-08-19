angular.module('AngularSearch')
	.factory('AccountNo', function AccountNoFactory(){
		var accountDetails = [
					{ firstName: "John", lastName: "Smith", accountNumber: 1001360587},
					{ firstName: "Nina", lastName: "Stanley", accountNumber: 1001360588},
					{ firstName: "Matthew", lastName: "Dobbs", accountNumber: 1001360589},
					{ firstName: "Edward", lastName: "Cavanaugh", accountNumber: 1001360590},
					{ firstName: "Mira", lastName: "Sheikh", accountNumber: 1001360591},
					{ firstName: "Sanjay", lastName: "Manaktala", accountNumber: 1001360592},
					{ firstName: "Mike", lastName: "Drinkwater", accountNumber: 1001360593},
					{ firstName: "Gavin", lastName: "McCullion", accountNumber: 1001360594},
					{ firstName: "James", lastName: "Rodrigues", accountNumber: 1001950587},
					{ firstName: "Ricardo", lastName: "Nunes", accountNumber: 1001360967},
					{ firstName: "Malhar", lastName: "Deshpande", accountNumber: 1009760587},
					{ firstName: "Steve", lastName: "Schatz", accountNumber: 1001360598},
					{ firstName: "Stewie", lastName: "Griffin", accountNumber: 1001399587},
				];

		var returnAccount = {firstName: '', lastName: '', accountNumber: ''};
		var fieldVal;

		return{

			findAccountDetails: function(number){

				for(var i=0;i<accountDetails.length;i++){

					if(number.num == accountDetails[i].accountNumber){

						returnAccount.firstName = accountDetails[i].firstName;
						returnAccount.lastName = accountDetails[i].lastName;
						returnAccount.accountNumber = accountDetails[i].accountNumber;
					}
				}
			},

			getAccount: function(){

				if(returnAccount.firstName.length == 0 && returnAccount.firstName.length == 0 && returnAccount.firstName.length == 0){
					return {status:404, obj: returnAccount};
				} else {
					return{status:200, obj: returnAccount};
				}
			},

			initializeAccount: function(){
				returnAccount = {firstName: '', lastName: '', accountNumber: ''};
				
			},

			validateField: function(field){
				
				var input = field.num;
				var regx = /\D/;

				if(input.length != 10){
					return {error: 'Length of input is not valid. Please enter a valid 10 digit account number.', value: false};
				} else if(input.search(regx) != -1){
					return {error: 'Please enter a valid Account Number. A valid account number is a 10 digit number. It ' + 
					'contains no characters or special characters', value: false};
				} else {
					return {error: 'No error', value: true};
				}
			}
		};
	});