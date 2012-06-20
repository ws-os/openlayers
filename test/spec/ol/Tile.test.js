describe("ol.Tile", function() {

    describe("creating a tile", function() {
        it("creates a tile instance", function() {
            var tile = new ol.Tile();
            expect(tile instanceof ol.Tile).toBe(true);
        });
        it("sets an image node in the instance", function() {
            var tile = new ol.Tile();
            expect(tile.getImg()).toBeDefined();
        });
    });

});
