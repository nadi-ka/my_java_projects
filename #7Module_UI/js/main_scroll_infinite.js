const container = document.querySelector('.lower_panel');
// The Scroll Event.
window.addEventListener('scroll', () => {
	const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(createPost, 100);
	}
});

// The createPost function creates The HTML for the blog post.
// It append it to the container.
function createPost(){
	const post = document.createElement('div');
	post.className = 'lower_sqr_container_out';

	post.innerHTML = `
	<div class="lower_sqr_container_inn">
		<div class="square_lower">
			<a class="main_cert_ref" href="item_details.html">
			</a>
		</div>
		<div class="square_label_lower">

			<div id="upper_label_block">
				<div class="text_block">
					<p id="l_p_size" class="cert_name">
						<a class="main_cert_name_ref" href="item_details.html">
						</a>
					</p>
					<p class="cert_descript" id="s_p_size">Brief description</p>
				</div>
				<div class="heart_block">
					<img class="nav_icon" src="img/baseline_favorite_black_18dp.png">
				</div>
		 </div>

		 <div id="lower_label_block">
			 <div class="price_block">
				 <p class="cert_price" id="l_p_size_bold">$100</p>
			 </div>
			 <div class="cart_block">
				 <form action="/cart/add" method="POST">
					 <input name="quantity" type="hidden" value="1" />
					 <input name="product_id" type="hidden" value="" />
					 <input name="product_name" type="hidden" value="Skydiving" />
					 <button class="add_cart" type="submit">Add to Cart</button>
				 </form>
			 </div>
		 </div>
		</div>
	</div>

	<div class="lower_sqr_container_inn">
		<div class="square_lower">
			<a class="main_cert_ref" href="item_details.html">
			</a>
		</div>
		<div class="square_label_lower">

			<div id="upper_label_block">
				<div class="text_block">
					<p id="l_p_size" class="cert_name">
						<a class="main_cert_name_ref" href="item_details.html">
						</a>
					</p>
					<p class="cert_descript" id="s_p_size">Brief description</p>
				</div>
				<div class="heart_block">
					<img class="nav_icon" src="img/baseline_favorite_black_18dp.png">
				</div>
		 </div>

		 <div id="lower_label_block">
			 <div class="price_block">
				 <p class="cert_price" id="l_p_size_bold">$100</p>
			 </div>
			 <div class="cart_block">
				 <form action="/cart/add" method="POST">
					 <input name="quantity" type="hidden" value="1" />
					 <input name="product_id" type="hidden" value="" />
					 <input name="product_name" type="hidden" value="Skydiving" />
					 <button class="add_cart" type="submit">Add to Cart</button>
				 </form>
			 </div>
		 </div>
		</div>
	</div>

	<div class="lower_sqr_container_inn">
		<div class="square_lower">
			<a class="main_cert_ref" href="item_details.html">
			</a>
		</div>
		<div class="square_label_lower">

			<div id="upper_label_block">
				<div class="text_block">
					<p id="l_p_size" class="cert_name">
						<a class="main_cert_name_ref" href="item_details.html">
						</a>
					</p>
					<p class="cert_descript" id="s_p_size">Brief description</p>
				</div>
				<div class="heart_block">
					<img class="nav_icon" src="img/baseline_favorite_black_18dp.png">
				</div>
		 </div>

		 <div id="lower_label_block">
			 <div class="price_block">
				 <p class="cert_price" id="l_p_size_bold">$100</p>
			 </div>
			 <div class="cart_block">
				 <form action="/cart/add" method="POST">
					 <input name="quantity" type="hidden" value="1" />
					 <input name="product_id" type="hidden" value="" />
					 <input name="product_name" type="hidden" value="Skydiving" />
					 <button class="add_cart" type="submit">Add to Cart</button>
				 </form>
			 </div>
		 </div>
		</div>
	</div>

	<div class="lower_sqr_container_inn">
		<div class="square_lower">
			<a class="main_cert_ref" href="item_details.html">
			</a>
		</div>
		<div class="square_label_lower">

			<div id="upper_label_block">
				<div class="text_block">
					<p id="l_p_size" class="cert_name">
						<a class="main_cert_name_ref" href="item_details.html">
						</a>
					</p>
					<p class="cert_descript" id="s_p_size">Brief description</p>
				</div>
				<div class="heart_block">
					<img class="nav_icon" src="img/baseline_favorite_black_18dp.png">
				</div>
		 </div>

		 <div id="lower_label_block">
			 <div class="price_block">
				 <p class="cert_price" id="l_p_size_bold">$100</p>
			 </div>
			 <div class="cart_block">
				 <form action="/cart/add" method="POST">
					 <input name="quantity" type="hidden" value="1" />
					 <input name="product_id" type="hidden" value="" />
					 <input name="product_name" type="hidden" value="Skydiving" />
					 <button class="add_cart" type="submit">Add to Cart</button>
				 </form>
			 </div>
		 </div>
		</div>
	</div>

	<div class="lower_sqr_container_inn">
		<div class="square_lower">
			<a class="main_cert_ref" href="item_details.html">
			</a>
		</div>
		<div class="square_label_lower">

			<div id="upper_label_block">
				<div class="text_block">
					<p id="l_p_size" class="cert_name">
						<a class="main_cert_name_ref" href="item_details.html">
						</a>
					</p>
					<p class="cert_descript" id="s_p_size">Brief description</p>
				</div>
				<div class="heart_block">
					<img class="nav_icon" src="img/baseline_favorite_black_18dp.png">
				</div>
		 </div>

		 <div id="lower_label_block">
			 <div class="price_block">
				 <p class="cert_price" id="l_p_size_bold">$100</p>
			 </div>
			 <div class="cart_block">
				 <form action="/cart/add" method="POST">
					 <input name="quantity" type="hidden" value="1" />
					 <input name="product_id" type="hidden" value="" />
					 <input name="product_name" type="hidden" value="Skydiving" />
					 <button class="add_cart" type="submit">Add to Cart</button>
				 </form>
			 </div>
		 </div>
		</div>
	</div>
`;

	var divsSize = document.querySelectorAll(".main_cert_ref").length;

	//   Appending the post to the container.
	container.appendChild(post);

	var startShowImgFrom = 0;
	var fullNumOfImgInContainer = 15;

	if(divsSize % fullNumOfImgInContainer == 0) {
		startShowImgFrom = 0;
	}else if (divsSize % 10 == 0) {
		startShowImgFrom = 5;
	}else {
		startShowImgFrom = 10;
	}

	for(var i = startShowImgFrom; i < fullNumOfImgInContainer; i++) {
		var img = document.createElement("img");
		img.className = "main_cert_img";
  	img.src = 'img/all/' + i + '.jpg';
  	var src = document.querySelectorAll(".main_cert_ref")[i - startShowImgFrom + divsSize];
  	src.appendChild(img);

		document.querySelectorAll(".main_cert_name_ref")[i - startShowImgFrom + divsSize]
			.innerHTML = certificateData[i][0];
	  document.querySelectorAll(".cert_descript")[i - startShowImgFrom + divsSize]
			.innerHTML = certificateData[i][1];
	  document.querySelectorAll(".cert_price")[i - startShowImgFrom + divsSize]
			.innerHTML = certificateData[i][2];
	}

}
