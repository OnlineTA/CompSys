window.emulateAlloc = function emulateAlloc(size, props) {
  var n_blocks = Math.ceil(size / props.block_size);

  var n_lvl1_blocks = Math.min(props.n_direct, n_blocks);
  var n_lvl2_blocks = 0;
  var n_lvl3_blocks = 0;
  var n_lvl4_blocks = 0;
  var n_innr_blocks = 0;
  n_blocks -= n_lvl1_blocks;

  if (n_blocks > 0) {
    n_lvl2_blocks = Math.min(props.n_block_ptrs, n_blocks);
    n_innr_blocks += 1;
    n_blocks -= n_lvl2_blocks;

    if (n_blocks > 0) {
      n_lvl3_blocks = Math.min(Math.pow(props.n_block_ptrs, 2), n_blocks);
      n_innr_blocks += 1 + Math.ceil(n_lvl3_blocks / props.n_block_ptrs);
      n_blocks -= n_lvl3_blocks;

      if (n_blocks > 0) {
        n_lvl4_blocks = Math.min(Math.pow(props.n_block_ptrs, 3), n_blocks);
        var n_innr_innr_blocks =
          Math.ceil(n_lvl4_blocks / Math.pow(props.n_block_ptrs, 2));
        n_indirect_blocks += 1 +
          Math.ceil(n_innr_innr_blocks / props.n_block_ptrs) +
          n_innr_innr_blocks;
        n_blocks -= n_lvl4_blocks;

        if (n_blocks > 0) {
          return Number.NaN;
        }
      }
    }
  }

  return n_lvl1_blocks +
         n_lvl2_blocks +
         n_lvl3_blocks +
         n_lvl4_blocks +
         n_innr_blocks;
}

window.Inode = React.createClass({
  render: function() {

    var offset = this.props.offset + (this.props.alloc_inode_block ? 1 : 0);
    var toalloc = this.props.size;
    var block_size = this.props.block_size;
    var n_direct = this.props.n_direct;
    var n_block_ptrs = this.props.n_block_ptrs;

    function getDirectPtr(index) {
      var blocknum = offset++;
      toalloc -= block_size;
      return (
        <div className="direct" key={ index }>
          <div className="index">{ index }</div>
          <div className="blocknum">{ blocknum }</div>
        </div>
      );
    }

    function getZeroPtr(index) {
      return (
        <div className="zero" key={ index }>
          <div className="index">{ index }</div>
          <div className="blocknum">0</div>
        </div>
      );
    }

    var ellipsis = (
      <div className="ellipsis">
        <div className="index">...</div>
        <div className="blocknum">...</div>
      </div>
    );

    function getPtrs(maxPtrs, cont, skip_size) {
      var n_blocks = Math.min(maxPtrs, Math.ceil(toalloc / block_size));
      var ptrs = [];
      if (n_blocks <= 5) {
        for (var i = 0; i < n_blocks; i++) {
          ptrs.push(cont(i));
        }
      } else {
        for (var i = 0; i < 2; i++) {
          ptrs.push(cont(i));
        }
        ptrs.push(ellipsis);

        var ellipsis_alloc = n_blocks - 3;
        toalloc -= skip_size * ellipsis_alloc;
        offset += ellipsis_alloc;

        ptrs.push(cont(n_blocks - 1));
      }

      var remPtrs = maxPtrs - n_blocks;
      if (remPtrs <= 5) {
        for (var i = n_blocks; i < maxPtrs; i++) {
          ptrs.push(getZeroPtr(i));
        }
      } else {
        ptrs.push(getZeroPtr(n_blocks));
        ptrs.push(getZeroPtr(n_blocks + 1));
        ptrs.push(ellipsis);
        ptrs.push(getZeroPtr(maxPtrs - 1));
      }
      return ptrs;
    }

    function getIndirectPtr(index, cont) {
      if (toalloc <= 0) {
        return getZeroPtr(index);
      }
      var blocknum = offset++;
      return (
        <div className="indirect" key={ index }>
          <div className="index">{ index }</div>
          <div className="blocknum">{ blocknum }</div>
          <div className="contents">
            {cont()}
          </div>
        </div>
      );
    }

    function getLvl2Ptrs(index) {
      return getIndirectPtr(index,
        function () { return getPtrs(n_block_ptrs,
          getDirectPtr, block_size) }
      );
    }

    function getLvl3Ptrs(index) {
      return getIndirectPtr(index,
        function () { return getPtrs(n_block_ptrs,
          getLvl2Ptrs, block_size * 1024) }
      );
    }

    function getLvl4Ptrs(index) {
      return getIndirectPtr(index,
        function () { return getPtrs(n_block_ptrs,
          getLvl3Ptrs, block_size * Math.pow(1024, 2)) }
      );
    }

    var directPtrs = getPtrs(this.props.n_direct,
                                      getDirectPtr, block_size);
    var singlePtr = getLvl2Ptrs(this.props.n_direct);
    var doublePtr = getLvl3Ptrs(this.props.n_direct + 1);
    var triplePtr = getLvl4Ptrs(this.props.n_direct + 2);
    return (
      <div className="inode">
        {directPtrs}
        {singlePtr}
        {doublePtr}
        {triplePtr}
      </div>
    );
  }
});
