/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartments-listing.mjs — no editar a mano.
 *
 * Listado de apartamentos. Envoltorio y clases idénticos al original; las
 * 28 tarjetas, que allí venían escritas una a una, salen de los datos.
 */

import { apartmentCards } from '@/data/apartment-cards';
import { ApartmentCard } from './ApartmentCard';

export function ApartmentsListing() {
  return (
    <section className="section clip">
      <div className="container">
        <div className="apart-w">
          <div className="apart-s">
            <div className="u-48"></div>
            <div className="u-272"></div>
            <div className="grid">
              <div data-sort="" data-filter="" className="apart-s_cms">
                <div className="apart-s_title">
                  <h1 data-prevent-flicker="" data-scroll-reveal="h" className="h1 a-center mob_a-left">Apartments</h1>
                  <div data-prevent-flicker="" data-filter-count="" data-scroll-reveal="h" className="h1 a-right b-desk">0</div>
                </div>
                <div className="u-16"></div>
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="apart-s_cms_filter">
                  <div className="apart-s_cms_filter_c">
                    <div className="grid _9-columns">
                      <div className="apart-s_cms_filter_item">
                        <div data-select="" className="filter_select">
                          <div data-select="btn" className="filter_select_btn">
                            <div className="l2 reg">Typology</div>
                            <div className="filter_select_btn_label">
                              <a hover-nav-item-l2="" aria-label="All" href="#" className="nav-item w-inline-block">
                                <div className="nav-item_label">
                                  <div hover="text" className="nav-item_label_text"><div data-select="value" className="l2">All</div></div>
                                  <div hover="text" className="nav-item_label_text is-2"><div data-select="value" className="l2">All</div></div>
                                </div>
                              </a>
                              <div hover="ico" className="ico-12">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1166 8.11436C17.6048 7.62682 18.3982 7.62641 18.8862 8.11436C19.3741 8.60232 19.3737 9.39569 18.8862 9.88389L12.8862 15.8839C12.398 16.372 11.6048 16.372 11.1166 15.8839L5.11662 9.88389C4.62846 9.39574 4.62846 8.60252 5.11662 8.11436C5.60483 7.62682 6.3982 7.62641 6.88615 8.11436L12.0014 13.2296L17.1166 8.11436Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-select="drop-down" className="filter_select_drop-down">
                            <div className="filter_select_drop-down_list">
                              <div data-select="item" data-filter-group="type" data-filter-trigger="*" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">All</div></div>
                              <div className="cms w-dyn-list">
                                <div role="list" className="filter_select_drop-down_list w-dyn-items">
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="type" data-filter-trigger="ground-floor-basement" hover-select-item="" className="filter_select_drop-down_list_item">
                                      <div hover="text" className="l1">Ground floor + basement</div>
                                    </div>
                                  </div>
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="type" data-filter-trigger="ground-floor" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Ground Floor</div></div>
                                  </div>
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="type" data-filter-trigger="penthouse-duplex" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Penthouse duplex</div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apart-s_cms_filter_item">
                        <div data-select="" className="filter_select">
                          <div hover-nav-item-l2-trigger="" data-select="btn" className="filter_select_btn">
                            <div className="l2 reg">Bedrooms</div>
                            <div className="filter_select_btn_label">
                              <a hover-nav-item-l2="" aria-label="All" href="#" className="nav-item w-inline-block">
                                <div className="nav-item_label">
                                  <div hover="text" className="nav-item_label_text"><div data-select="value" className="l2">All</div></div>
                                  <div hover="text" className="nav-item_label_text is-2"><div data-select="value" className="l2">All</div></div>
                                </div>
                              </a>
                              <div hover="ico" className="ico-12">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1166 8.11436C17.6048 7.62682 18.3982 7.62641 18.8862 8.11436C19.3741 8.60232 19.3737 9.39569 18.8862 9.88389L12.8862 15.8839C12.398 16.372 11.6048 16.372 11.1166 15.8839L5.11662 9.88389C4.62846 9.39574 4.62846 8.60252 5.11662 8.11436C5.60483 7.62682 6.3982 7.62641 6.88615 8.11436L12.0014 13.2296L17.1166 8.11436Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-select="drop-down" className="filter_select_drop-down">
                            <div className="filter_select_drop-down_list">
                              <div data-select="item" data-filter-group="bed" data-filter-trigger="*" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">All</div></div>
                              <div className="cms w-dyn-list">
                                <div role="list" className="filter_select_drop-down_list w-dyn-items">
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="bed" data-filter-trigger="2" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">2</div></div>
                                  </div>
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="bed" data-filter-trigger="3" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">3</div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apart-s_cms_filter_item is-last">
                        <div data-select="" className="filter_select">
                          <div data-select="btn" className="filter_select_btn">
                            <div className="l2 reg">Sort by</div>
                            <div className="filter_select_btn_label">
                              <a hover-nav-item-l2="" aria-label="Relevant" href="#" className="nav-item w-inline-block">
                                <div className="nav-item_label">
                                  <div hover="text" className="nav-item_label_text"><div data-select="value" className="l2">Relevant</div></div>
                                  <div hover="text" className="nav-item_label_text is-2"><div data-select="value" className="l2">Relevant</div></div>
                                </div>
                              </a>
                              <div hover="ico" className="ico-12">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1166 8.11436C17.6048 7.62682 18.3982 7.62641 18.8862 8.11436C19.3741 8.60232 19.3737 9.39569 18.8862 9.88389L12.8862 15.8839C12.398 16.372 11.6048 16.372 11.1166 15.8839L5.11662 9.88389C4.62846 9.39574 4.62846 8.60252 5.11662 8.11436C5.60483 7.62682 6.3982 7.62641 6.88615 8.11436L12.0014 13.2296L17.1166 8.11436Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-select="drop-down" className="filter_select_drop-down">
                            <div className="filter_select_drop-down_list">
                              <div data-select="item" data-sort-order="asc" data-sort-trigger="relevant" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Relevant</div></div>
                              <div data-select="item" data-sort-order="asc" data-sort-trigger="area" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Smallest area</div></div>
                              <div data-select="item" data-sort-order="desc" data-sort-trigger="area" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Largest area</div></div>
                            </div>
                          </div>
                        </div>
                        <a data-reset="" aria-label="Reset" hover-nav-item-l2="" href="#" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div hover="text" className="nav-item_label_text"><div className="l2">Reset</div></div>
                            <div hover="text" className="nav-item_label_text is-2"><div className="l2">Reset</div></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="apart-s_cms_decor">
                    <div data-wf--decor--variant="med" className="decor">
                      <div className="frame_l-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_lt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_t-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_rt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_r-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_rb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_b-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_lb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-16 b-desk"></div>
                <div className="u-8 b-mob"></div>
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="apart-cms w-dyn-list">
                  <div data-sort-list="" data-filter-list="" role="list" className="apart-cms_list w-dyn-items">
{apartmentCards.map((card) => (
  <ApartmentCard key={card.code} card={card} />
))}</div>
                </div>
                <div className="apart-cms w-dyn-list">
                  <div role="list" className="apart-cms_list w-dyn-items"></div>
                </div>
                <div data-filter-empty="" className="apart-s_cms_empty">
                  <div className="apart-s_cms_decor">
                    <div data-wf--decor--variant="med" className="decor">
                      <div className="frame_l-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_lt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_t-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_rt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_r-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_rb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_b-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                      <div className="frame_lb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="grid _9-columns">
                    <div className="apart-s_cms_empty_info">
                      <div className="apart-s_cms_empty_title"><div className="c1 a-center">nothing found</div></div>
                      <div className="u-24"></div>
                      <div className="p1 a-center">
                        We didn&#x27;t find anything for your request. Please, try changing your search settings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-16"></div>
              </div>
            </div>
            <div className="u-160"></div>
          </div>
          <div data-video-playpause="" data-parallax="ctn-down" className="flower apart">
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cbougainvillea-flowers_05.avif" className="video">
              <source src="https://puntacanadinnerinthesky.com/urbatrix/era/videos%5Cbougainvillea-flowers_05.webm" type="video/webm" />
              <source src="https://puntacanadinnerinthesky.com/urbatrix/era/videos%5Cbougainvillea-flowers_05.mov" type="video/mp4" />
            </video>
          </div>
          <div className="apart_themes">
            <div className="themes_row">
              <div data-bg="light" className="apart_themes_light-1"></div>
              <div data-bg="color" className="apart_themes_color-1"></div>
            </div>
            <div data-bg="light" className="apart_themes_light-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
