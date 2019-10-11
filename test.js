QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "success!" );
    assert.ok( 2 == "2", "success!"  );
    assert.ok( 3 == "3", "success!" );
    assert.ok( 4 == "4", "success!"  );
    assert.ok( 5 == "5", "success!"  );
    assert.ok( 6 == "2", "failure!" );
    assert.ok( 1 == "0", "failure!" );
  });

 