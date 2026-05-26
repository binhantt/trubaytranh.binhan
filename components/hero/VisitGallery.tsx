const galleryAddress = "97A Phó Đức Chính, Quận 1, TP. Hồ Chí Minh";
const mapQuery = encodeURIComponent(galleryAddress);

export function VisitGallery() {
  return (
    <section className="visit-gallery-section px-6 py-16 sm:px-10 lg:px-24" id="visit-gallery">
      <div className="visit-gallery-shell mx-auto">
        <div className="visit-gallery-hero">
          <div className="visit-gallery-toolbar">
            <span>Không gian 3D</span>
            <span>ArtSpace / Visit</span>
          </div>

          <div className="visit-room-scene" aria-label="Phối cảnh 3D phòng triển lãm" role="img">
            <div className="visit-room-orbit">
              <span className="visit-room-wall visit-room-wall-back" />
              <span className="visit-room-wall visit-room-wall-left" />
              <span className="visit-room-wall visit-room-wall-right" />
              <span className="visit-room-floor" />
              <span className="visit-room-light" />
              <span className="visit-room-frame visit-room-frame-1" />
              <span className="visit-room-frame visit-room-frame-2" />
              <span className="visit-room-frame visit-room-frame-3" />
              <span className="visit-room-bench" />
            </div>
          </div>

          <div className="visit-gallery-caption">
            <span>Preview</span>
            <p>Xem bố cục phòng tranh trước khi đến trực tiếp.</p>
          </div>
        </div>

        <aside className="visit-gallery-card">
          <span className="visit-gallery-kicker">Ghé xem trực tiếp</span>
          <h2>Đến nơi xem tác phẩm</h2>

          <div className="visit-gallery-info">
            <p>
              <span>Địa chỉ</span>
              {galleryAddress}
            </p>
            <p>
              <span>Giờ mở cửa</span>
              09:00 - 18:00 / Hằng ngày
            </p>
          </div>

          <div className="visit-gallery-map">
            <span aria-hidden="true" />
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              title="Bản đồ đến phòng tranh ArtSpace"
            />
          </div>

          <a
            className="visit-gallery-link"
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            rel="noreferrer"
            target="_blank"
          >
            Mở Google Maps
          </a>
        </aside>
      </div>
    </section>
  );
}
