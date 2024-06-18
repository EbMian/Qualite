import { it, expect, describe } from 'vitest';
import { formatDate } from './format-date';




describe("Comportement de base", () => {
  
    it("Doit retourner 17/12/1995", function() {
        const date1 = new Date('December 17, 1995 03:24:00');
        expect(formatDate(date1)).toEqual('17/12/1995');
    });
    it("Doit retourner la date du jour au format 'dd/mm/yyyy'", function() {
        // Test à mofifier en fonction de la date du jour
        expect(formatDate()).toEqual('18/06/2024');
    });
    // it("Doit retourner 12/12/2023 à 23h59", function() {
    //     // Test à mofifier en fonction de la date du jour
    //     expect(formatDate()).toEqual('18/06/2024');
    // });
});
