import { it, expect, describe } from 'vitest';
import { FormatDateConfig, formatDate } from './format-date';


// Comportement de base

describe("Comportement de base", () => {
  
    it("Doit retourner 17/12/1995", function() {
        const date1 = new Date('December 17, 1995 03:24:00');
        expect(formatDate(date1)).toEqual('17/12/1995');
    });
    it("Doit retourner 14/09/2025", function() {
        const date2 = new Date('September 14, 2025 00:00:00');
        expect(formatDate(date2)).toEqual('14/09/2025');
    });
})

