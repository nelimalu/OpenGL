#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;

void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;

	float dist = abs((distance(pos, vec2(0.0))) * 10);
	vec3 a = vec3(1 - dist, 1 - dist, 1 - dist);

	color = vec4(a.x, a.y, a.z, 1.0);
	//color = vec4(a.x / 2 + 0.5, a.y / 2 + 0.5, a.z / 2 + 0.5, 1.0);
}
