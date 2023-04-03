class Mammals{
  
  constructor()
  {
    this.mammalname='animal';
    this.type='herbivourus';
  }
  mammalsInfo()
  {
    console.log(this.mammalname,this.type)
  }
}

class cow extends Mammals {
  constructor()
  {
    super();
    this.eats='plants';
    this.mammalname='animals';
  }
  display()
  {
    console.log(this.eats)
  }
}
 
const x= new cow();
x.display();
x.mammalsInfo();
