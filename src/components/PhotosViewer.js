import { Image } from "antd";
import a from "../../src/static/1.jpeg";
import b from "../../src/static/2.jpeg";
import c from "../../src/static/3.jpeg";
import d from "../../src/static/4.jpeg";
import e from "../../src/static/5.jpeg";
import f from "../../src/static/6.jpeg";
import g from "../../src/static/7.jpeg";
import h from "../../src/static/8.jpeg";
import i from "../../src/static/9.jpeg";
import j from "../../src/static/10.jpeg";
import k from "../../src/static/11.jpeg";
import l from "../../src/static/12.jpeg";
import m from "../../src/static/13.jpeg";
import n from "../../src/static/14.jpeg";
import o from "../../src/static/15.jpeg";
import p from "../../src/static/16.jpeg";
import q from "../../src/static/17.jpeg";
import r from "../../src/static/18.jpeg";

function PhotoViewer() {
  return (
    <div className="photo-viewer">
      <Image.PreviewGroup
        items={[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r]}
      >
        <Image width={400} src={a} />
      </Image.PreviewGroup>
    </div>
  );
}

export default PhotoViewer;
