import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Polution } from "./../../../src/models/polution/polution.model";

// description du sujet de test
describe('polution', () => {

        let model;

        // Avant chaque it le beforeEach sera invoqué
        beforeEach(() => {
        model = new Polution
        });


        it('aqi', () => {
            console.log(model.get("aqi"));
            assert.equal(model.get("aqi"), 0);

        });

        it('pm', () => {
            assert.equal(model.get("pm"), 0);
        });

        it('ozone', () => {
            assert.equal(model.get("ozone"), 0);

        });

    
    });