`use strict`


class Student {
    constructor(fullName,  course, university, marks){
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.marks = marks;
         this.status = true;
   
      
    }

     _getInfo() {
        return (`Студент ` + this.course + `-ого курсу ` + this.university + ` , ` + this.fullName)
      }
    
      get mark(){
        if (!this.status) {
                return null;
            }
            return this.marks;
        } 
  
    set mark(value) {
        if (!this.status) {
            return null;
        }
        this.marks.push(value);
    }

    getAverageMark(){
        const result = (this.marks.reduce((prev, val) => prev += val) / this.marks.length).toFixed(1);
        if (!this.status) {
          return null;
        }
        return result;
    }   

   dismiss() {
    this.status = false;
    return (this._getInfo() + ` виключено з навчального закладу`)
}

recover() {
    this.status = true;
    return (this._getInfo() + ` поновленно у навчальному закладі`)
}

}

const student =  new Student (`Остап Бендер`, 1 , `Вищої Школи Психотерапії`, [5, 4, 4, 5]);
console.log (student)