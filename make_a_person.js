function Person(first, last) {
    let firstName = first;
    let lastName = last;
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
  
    this.setFirstName = function(first) {
      firstName = first;
    };
  
    this.setLastName = function(last) {
      lastName = last;
    };
  
    this.setFullName = function(firstAndLast) {
      firstName = firstAndLast.split(' ')[0];
      lastName = firstAndLast.split(' ')[1];
    };
  }
  
  // Example usage
  const bob = new Person('Bob', 'Ross');
  console.log(bob.getFullName()); // Bob Ross
  bob.setFirstName('Robert');
  console.log(bob.getFirstName()); // Robert
  bob.setLastName('Smith');
  console.log(bob.getLastName()); // Smith
  bob.setFullName('John Doe');
  console.log(bob.getFullName()); // John Doe