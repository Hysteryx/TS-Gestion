export class Pile {
    private PileContainer = []


    /**
     * 
     * @param element n'importe quel type d'element ajouter en tête de Pile 
     */
    public Empile(element: any) : void {
        this.PileContainer.push(element)
    }
    
    /**
     * 
     * @returns return le premier element de la pile et l'enlève de cette dernière
     */
    public Depile() : any {
        if (this.EstVide() === false) {
            return this.PileContainer.pop()
        } 
    }

    /**
     * 
     * @returns renvoie de manière brut la pile (sous forme de liste)
     */
    public GetAll() : any {
        return this.PileContainer
    }

    /**
     * 
     * @returns renvoie true si pile vide & false si pile pas vide 
     */
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


    /**
     * 
     * @param element n'importe quel type d'element est prit en compte, l'ajoute en file en dernière position (dernier à sortir)
     */
    public Enfile(element: any) : void {
        this.FileContainer.push(element)
    }

    /**
     * 
     * @returns retire valeure sortante et la return 
     */
    public Defile() : any { 
        if (this.EstVide() === false) { 
            return this.FileContainer.shift()
        }
    }

    /**
     * 
     * @returns renvoie sous forme brute (liste) les éléments
     */
    public GetAll() : any {
        return this.FileContainer
    } 

    /**
     * 
     * @returns true si File vide false si File non vide
     */
    public EstVide() : any {
        if (this.FileContainer === []) {
            return true 
        } else {
            return false
        }
    }
}

