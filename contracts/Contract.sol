pragma solidity ^0.4.4;
 
contract Contract {
        
        uint public ContractID;
		string public ProductName;

    function Contract(uint _ContractID,string _ProductName){
        ContractID = _ContractID;
		ProductName = _ProductName;
    }
  
}
