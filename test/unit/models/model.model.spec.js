import { describe, beforeEach, it } from "mocha";
import { assert } from "chai";
import { Model } from "./../../../src/models/model.model";
import { window } from "./../models/window";

// description du sujet de test
describe('Model', () => {

        let model;

        // Avant chaque it le beforeEach sera invoqué
        beforeEach(() => {
            model = new Model({
                exist: undefined
            })
        });

        it('setter mute proprety, if not exists', () => {
            let value = true;
            model.set("foo", value);
            assert.equal(model.get("foo"), undefined);

        });

        it('setter mute proprety, if exists', () => {
            let value = true;
            model.set("exist", value);
            assert.equal(model.get("exist"), value);

        });

        it('Getter retrieve default value if proprety is undefined or do not exists', () => {
            let value = "default value";
            model.set();
            assert.equal(model.get("exist", value), value);

        });

        // The window problem
        it("toString get JSON representation of model property", () => {
            model.set("exist", true);  
            assert.equal(model.toString(), "{\"exist\":true}" )
            
        });

        // it("notify", () => {
        //     let value = true;
        //     model.set("exist", value);
        //     assert.equal(model.get("notif", value).notify)
        // });

        it("callback", () => {
            let value = true;
            model.set("exist", value).bind;
            assert.equal(model.get("notification", value).bind)
        });

        it("notify call binded callback", () => {
            let called = false;
            let callback = () => {
                    called = true;
            }
            model.bind(callback);
            model.notify(called, true);
        })


    });

