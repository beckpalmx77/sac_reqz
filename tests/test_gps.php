<?php

//$result = file_get_content('https://www.gpsiam.net/api/v2/?TOKEN=[2QZDEMQNECVFQC2MWD47UU3MLJ4UM5MKBLUUK565WVFMGEZ7SZC5WRXU7BVMTO55MJ2UYKH4NCG62KBN4FIFSPMR6N524U67VV5B5CLXTX4IEIMCMOVM4FDS3IRKFV5R7NJFNEVUH6KYQNAODWIGQ4RSBE]');

//print_r($result);

$params = ['TOKEN' => '2QZDEMQNECVFQC2MWD47UU3MLJ4UM5MKBLUUK565WVFMGEZ7SZC5WRXU7BVMTO55MJ2UYKH4NCG62KBN4FIFSPMR6N524U67VV5B5CLXTX4IEIMCMOVM4FDS3IRKFV5R7NJFNEVUH6KYQNAODWIGQ4RSBE'];
$defaults = array(
    CURLOPT_URL => 'https://www.gpsiam.net/api/v2/?',
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $params,
);
$ch = curl_init();
curl_setopt_array($ch, ($defaults));