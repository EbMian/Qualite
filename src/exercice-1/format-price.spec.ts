import { it, expect, describe } from 'vitest';
import { formatPrice } from './format-price.js';

// Comportement de base

describe("Comportement de base", () => {
    it("Doit retourner 19,99", function() {
        expect(formatPrice(19.991988645432)).toEqual("19,99");
    });
    it("Doit retourner 1,00", function() {
        expect(formatPrice(1)).toEqual("1,00");
    });
    it("Doit retourner 1 000 000,00", function() {
        expect(formatPrice(1000000)).toEqual("1 000 000,00");
    });
    
})

