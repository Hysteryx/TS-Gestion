export class MeteoManager {

    
    /* 
        liste des différents temps dispo ds GTA
    */ 
    private AllCloudStatut = ["BLIZZARD","CLEAR","CLEARING","CLOUDS","EXTRASUNNY","FOGGY","HALLOWEEN","NEUTRAL","OVERCAST","RAIN","SMOG","SNOW","SNOWLIGHT","THUNDER","XMAS"]



    /** 
     * Correspond a l'id dans la liste des temps dispo ci-dessus
    * @param wheatherId  
    * 
    * Correspond au temps en ms de transition entre l'ancien temps et le nouveau 
    * @param transitionTime
    * 
    **/

    public ChangeWheather(wheatherId: number,transitionTime: number): void {
        let weather = this.AllCloudStatut[wheatherId]
        if (transitionTime != 0) {
            ClearOverrideWeather()
            SetWeatherTypeOvertimePersist(weather, transitionTime)
        } else {
            ClearOverrideWeather()
            ClearWeatherTypePersist()
            SetWeatherTypePersist(weather)
            SetWeatherTypeNow(weather)
            SetWeatherTypeNowPersist(weather)
        }
    }

    /**
     *  Renvoie la liste des temps disponnible dans une liste de chaine de caractères 
     * @returns 
     */
    public GetAllWheatherType(): string[] {
        return this.AllCloudStatut
    }

    /**
     * 
     * Correspond au statut true retire l'éléctricité et false la remet 
     * @param boolean
     *  
    **/
    public CutElectricity(boolean: boolean): void {
        console.log(boolean)
        SetBlackout(boolean)
    }


    /**
     * @param hours 
     * Correspond à l'heure, toutes valeure incorecte genre 46 heure sera remplacé (sinon ça crash)
     * 
     * @param minute
     * Correspond aux minutes, toutes valeure incorecte genre 406 minutes sera remplacé (sinon ça crash)
     * 
     * @param seconds 
     * Correspond aux secondes , toutes valeure incorecte genre 460 seconds sera remplacé (sinon ça crash)
    **/
    public ChangeTime(hours:number, minute: number, seconds: number): void {
        if (hours > 23 || hours < 0) {
            hours = 0 
        } 
        if (minute > 59 || minute < 0) {
            minute = 0 
        }
        if (seconds > 59 || seconds < 0) {
            seconds = 0 
        }
        NetworkOverrideClockTime(hours,minute,seconds)
    }

}