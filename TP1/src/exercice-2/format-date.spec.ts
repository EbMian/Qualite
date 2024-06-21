import { it, expect, describe } from 'vitest';
import { formatDate, FormatDateConfig } from './format-date';


let date : Date;
let hours : string;
let minutes : string;
let separateTest : FormatDateConfig = 
{
    "sepDateHours": " b ",
    "sepHoursMinutes": "u"
};

describe("Tests de la fonction formatDate", () => {
    
    // Test avec uniquement une date en paramètre
    it("Doit retourner 17/12/1995 à 03h24", function() {
        date = new Date('December 17, 1995 03:24:00');
        expect(formatDate(date)).toEqual('17/12/1995 à 03h24');
    });

    // Test avec une date et un object de configuration qui contient uniquement un séparateur date/heures précisé (autre que chaine vie)
    it("Doit retourner 17/12/1995 - 03h24", function() {
        const separateTest2 : FormatDateConfig = 
        {
            "sepDateHours": " - ",
            "sepHoursMinutes": ""
        };
        date = new Date('December 17, 1995 03:24:00');
        expect(formatDate(date, separateTest2)).toEqual('17/12/1995 - 03h24');
    });

    // Test avec une date et un object de configuration qui contient uniquement un séparateur heures/minutes précisé (autre que chaine vie)
    it("Doit retourner 17/12/1995 à 03t24", function() {
        separateTest = 
        {
            "sepDateHours": "",
            "sepHoursMinutes": "t"
        };
        date = new Date('December 17, 1995 03:24:00');
        expect(formatDate(date, separateTest)).toEqual('17/12/1995 à 03t24');
    });

    // Test avec une date et un object de configuration qui contient les deux séparateurs
    it("Doit retourner 17/12/1995 b 03u24", function() {
        separateTest = 
        {
            "sepDateHours": " b ",
            "sepHoursMinutes": "u"
        };
        date = new Date('December 17, 1995 03:24:00');
        expect(formatDate(date, separateTest)).toEqual('17/12/1995 b 03u24');
    });

    // Test avec uniquement un object de configuration contenant les deux séparateurs
    it("Attention la date attendue doit être changée en fonction de la date du jour. Doit retourner 21/06/2024 c hhvmm", function() {
        separateTest = 
        {
            "sepDateHours": " c ",
            "sepHoursMinutes": "v"
        };
        date = new Date();
        hours = date.getHours().toString();
        minutes = date.getMinutes().toString();
        expect(formatDate(date, separateTest)).toEqual('21/06/2024 c ' + hours + 'v' + minutes);
    });

    // Test avec seulement un object de configuration contenant uniquement un séparateur date/heures précisé (autre que chaine vie)
    it("Attention la date attendue doit être changée en fonction de la date du jour. Doit retourner 21/06/2024 d hhhmm", function() {
        separateTest =
        {
            "sepDateHours": " d ",
            "sepHoursMinutes": ""
        };
        date = new Date();
        hours = date.getHours().toString();
        minutes = date.getMinutes().toString();
        expect(formatDate(date, separateTest)).toEqual('21/06/2024 d ' + hours + 'h' + minutes);
    });
    // Test avec seulement un object de configuration contenant uniquement un séparateur heures/minutes précisé (autre que chaine vie)
    it("Attention la date attendue doit être changée en fonction de la date du jour. Doit retourner 21/06/2024 à hhwmm", function() {
        separateTest =
        {
            "sepDateHours": "",
            "sepHoursMinutes": "w"
        };
        date = new Date();
        hours = date.getHours().toString();
        minutes = date.getMinutes().toString();
        expect(formatDate(date, separateTest)).toEqual('21/06/2024 à ' + hours + 'w' + minutes);
    });

    // Test sans aucun paramètre    
    it("Attention la date attendue doit être changée en fonction de la date du jour. Doit retourner 21/06/2024 à hhhmm", function() {
        const testNoParamHours = new Date().getHours();
        const testNoParamMinutes = new Date().getMinutes();
        // Test à mofifier en fonction de la date du jour
        expect(formatDate()).toEqual('21/06/2024 à ' + testNoParamHours + 'h' + testNoParamMinutes);
    });    
});
