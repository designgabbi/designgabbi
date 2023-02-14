//문서생성 - 김예진 2023.02.12
$(document).ready(function(){
    
    //INDEX : TYPEWRITING ANMATION
      /*         <----------- Variables ----------------->               */
      var texts,back,index,x,count,p,time,div,delayInMilliseconds;
		texts = ['graphic designer          ',
			   'adventurer          ',
			   'team player          ',
			   'visual designer          ',
			   'artist          '];
		back = false;
		index = 0;
		count = 0;
		time = 150;
		delayInMilliseconds = 100
		p = $('.mainBnrTit h2');
		div = $('.yPaint');
		/*         <----------- Variables ----------------->               */
		function write(){
		x = setInterval(function(){
		  /*      <-   False      ->        */
		  if( back ==false )
		  {
			time=80;
			p.text( p.text() + texts[index][count] );
			count++;
			if( count == texts[index].length )
			{
			  clearInterval(x);
			  back = true;
			  if( index==texts.length  -1 )
			  {
				index = 0
			  }
			  else
			  {
				index++
			  }		                 
			  write();
			};
		  }
		  /*      <-   False      ->        */
		  /*      <-   [  True ]      ->        */
		  else
		  {
			time=200
			count--;
			p.text(    p.text().slice(0,count)        )
			if (count == 0 ) {
			  clearInterval(x);
			  back = false;
			  write();
			}
		  }
		  /*      <-   [  True ]      ->        */
		},time);
		};
		write();
    /*     <!-------------   End   --------------->         */
    
}