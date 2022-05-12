export class Pile {
    private PileContainer = []


    public Empile(element: any) : void {
        this.PileContainer.push(element)
    }
    
    public Depile() : any {
        return this.PileContainer.pop() 
    }

    public GetAll() : any {
        return this.PileContainer
    }

    public EstVide() : any {
        if (this.PileContainer === []) {
            return true 
        } else {
            return false 
        }
    }
}

export class File {
    private FileContainer = []

    public Enfile(element: any) : void {
        this.FileContainer.push(element)
    }

    public Defile() : any { //verif que c pas vide
        if (this.EstVide() === false) { 
            return this.FileContainer.shift()
        }
    }

    public GetAll() : any {
        return this.FileContainer
    } 

    public EstVide() : any {
        if (this.FileContainer === []) {
            return true 
        } else {
            return false
        }
    }
}
