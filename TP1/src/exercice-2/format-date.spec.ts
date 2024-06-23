import { it, expect, describe, vi } from 'vitest';
import { formatDate, FormatDateConfig } from './format-date';

let mockDate : Date;
let date : Date;
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
    it("Doit retourner 17/12/1995 c 03v24", function() {
        separateTest = 
        {
            "sepDateHours": " c ",
            "sepHoursMinutes": "v"
        };
        mockDate = new Date('December 17, 1995 03:24:00');
        vi.setSystemTime(mockDate);
        date = new Date();
        // reset mocked time
        vi.useRealTimers();
        expect(formatDate(date, separateTest)).toEqual('17/12/1995 c 03v24');
    });

    // Test avec seulement un object de configuration contenant uniquement un séparateur date/heures précisé (autre que chaine vie)
    it("Doit retourner 17/12/1995 d 03h24", function() {
        separateTest =
        {
            "sepDateHours": " d ",
            "sepHoursMinutes": ""
        };
        mockDate = new Date('December 17, 1995 03:24:00');
        vi.setSystemTime(mockDate);
        date = new Date();
        // reset mocked time
        vi.useRealTimers();
        expect(formatDate(date, separateTest)).toEqual('17/12/1995 d 03h24');
    });
    // Test avec seulement un object de configuration contenant uniquement un séparateur heures/minutes précisé (autre que chaine vie)
    it("Doit retourner 17/12/1995 à 03w24", function() {
        separateTest =
        {
            "sepDateHours": "",
            "sepHoursMinutes": "w"
        };
        mockDate = new Date('December 17, 1995 03:24:00');
        vi.setSystemTime(mockDate);
        date = new Date();
        // reset mocked time
        vi.useRealTimers();
        expect(formatDate(date, separateTest)).toEqual('17/12/1995 à 03w24');
    });

    // Test sans aucun paramètre    
    it("Doit retourner 17/12/1995 à 03h24", function() {
        expect(formatDate()).toEqual('17/12/1995 à 03h24');
    });
    
});
