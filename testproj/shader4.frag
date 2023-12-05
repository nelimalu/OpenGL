#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;


void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;
	vec3 col = vec3(0.0, 0.0, 0.0);

	float d = -distance(pos, vec2(0, 0));
	for (int i = 0 ; i < 100; i++) {
		d = distance(pos, vec2(sin(d * i), cos(pos.y * time)));
	}
	d = distance(pos, vec2(pos.x,  d));
	//d = smoothstep(0.5, 0.9, d);
	//d -= 0.5;
	//d = abs(d);
	d = 0.05 / d;
	col += d;
	

	color = vec4(col, 1.0);
}
