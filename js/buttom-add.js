
class State {
  static setState()
}

class EmployeeModle {

}

class DOMRender {
  static getDOM (){
    const addButtom = document.querySelector('#buttom-add')
  
  return {
    inputAddButtom : addButtom
  }
  }

  static render(){
    const{
      inputAddButtom
    } = this.getDOM()
  }
}