import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { window } from "./../models/window";
import { Temperature } from "../../../src/models/temperature/temperature.model";



// description du sujet de test
describe('temperature', () => {

        let model;

        // Avant chaque it le beforeEach sera invoqué
        beforeEach(() => {
        model = new Temperature
        });


        it('temperature', () => {
            console.log(model.get("temperature"));
            assert.equal(model.get("temperature"), 0);

        });

        it('min', () => {
            assert.equal(model.get("min"), 0);
        });

        it('max', () => {
            assert.equal(model.get("max"), 0);

        });

    
    });
