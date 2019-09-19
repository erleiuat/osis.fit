<template>
    <div class="home">
        <!-- Home Section start-->

        <!--Home Section start-->
        <section id="home" class="home home-two vertical-scrolling">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-sm-12">
                        <div class="home-contain">
                            <div class="text-white">
                                <div class="contain">
                                    <h1 class="text-white">
                                        Osis.Fit
                                    </h1>
                                    <p class="slide-cap-desc">Enhance your business ideas with Powerful, Responsive, Elegant TOVO Theme.</p>
                                    <a href="#"><img class="ml-10 store" :src='"../assets/images/play-store.png"' alt="play-store"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <div class="home-right">
                            <!-- Tile js start -->
                            <Tile :image='"home/slider-caption.png"' />
                            <!-- Tile js end -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Home Section End-->

        <!--Home Section End -->

        <!-- About Start  -->
        <About />
        <!-- About End -->

        <!-- Feature Section start -->
        <Feature />
        <!-- Feature Section End -->

        <!-- Price Section start-->
        <Price />
        <!-- Price Section End -->
        
        <!-- Footer Section start -->
        <Footer />
        <!-- Footer Section End -->

    </div>
</template>

<script>
import carousel from 'v-owl-carousel'
import Tile from '@/components/home/tile'

import About from '@/components/home/about'
import Feature from '@/components/home/feature'
import Screenshots from '@/components/home/screenshots'
import Team from '@/components/home/team'
import LatestBlog from '@/components/home/latest_blog'
import Price from '@/components/home/price'
import Testimonial from '@/components/home/testimonial'
import ContactUs from '@/components/home/contact_us'
import Subscribe from '@/components/home/subscribe'
import Map from '@/components/home/map'
import Footer from '@/components/home/footer'

export default {
    name: 'home',
    components: {
        Team, About, Feature, Screenshots, LatestBlog, Price, Testimonial,
        ContactUs, Subscribe, Map, Footer, Tile
    },
    beforeCreate: function () {
        document.body.className = 'home-style-two'
    }
}
</script>
